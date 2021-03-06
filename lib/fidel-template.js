
(function(Fidel) {
  Fidel.template = template.noConflict();

  Fidel.prototype.render = function(data) {
    var tmpl = (this.template) ? this.template : $('#'+this.templateId).html();
    this.el.html(Fidel.template(tmpl, data));
  };
})(window.Fidel);
