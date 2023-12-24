$(function () {  //avança para o próximo input ao apertar enter
    $('body').on('keydown', 'input, select', function (e) {
        if (e.which === 13) {
            let self = $(this), form = self.parents('form:eq(0)'), focusable, next;
            focusable = form.find('input').filter(':visible');
            next = focusable.eq(focusable.index(this) + 1);
            if (next.length) {
                next.focus();
            }
            return false;
        }
    });
});