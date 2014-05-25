var fs = require('fs');
var path = require('path');

var charset = 'utf-8';
var INCLUDE_RE = /(.*?)<!--\s*\[include\s*['"]*(.*?)['"]*\]\s*-->([\w\W]*?)<!--\s*\[\/include\]\s*-->/ig;
var TEMPLATE = '{{blank}}<!--[include "{{id}}"]-->\n{{content}}\n{{blank}}<!--[/include]-->';
var TEMPLATE_RE = /\{\{(.*?)\}\}/g;


var compile = function (file) {
	var html = fs.readFileSync(file, charset);

	if (INCLUDE_RE.test(html)) {
		html = html.replace(INCLUDE_RE, function ($1, blank, id, content) {

			var dirname = path.dirname(file);
			var target = path.resolve(dirname, id.split('/').join(path.sep));

			
			if (fs.existsSync(target)) {
				content = fs.readFileSync(target, charset);
			} else {
				throw new Error('File not found: ' + target);
			}

			return template(TEMPLATE, {
				id: id,
				blank: blank,
				content: content
			});
		});
		
		fs.writeFileSync(file, html, charset);
	}
	

};


var template = function (string, data) {
	return string.replace(TEMPLATE_RE, function ($1, $2) {
		return data[$2] || '';
	});
};


module.exports = compile;
