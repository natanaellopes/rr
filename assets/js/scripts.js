$(function(){

    $('#pagepiling').pagepiling({
        anchors: ['page1', 'page2', 'page3', 'page4'],
        navigation: {
            'textColor': '#fff',
            'bulletsColor': '#fff',
            'position': 'right',
            'tooltips': ['Home', 'Você precisa', 'Entenda', 'Contato']
        }
    });

    $('#btn').click(function(){

        var $btn = $(this);

        $btn.attr('disabled', 'disabled');
        $btn.text('ENVIANDO...');

        var $name = $('#input-name');
        var $email = $('#input-email');
        var $message = $('#input-message');

        if($name.val() == '') {
            swal('Oops...', 'Precisamos saber seu nome', 'error');
            resetButton();
            return;
        }

        if($email.val() == '') {
            swal('Oops...', 'Precisamos do seu email', 'error');
            resetButton();
            return;
        }

        if($message.val() == '') {
            swal('Oops...', 'Deixe-nos uma mensagem', 'error');
            resetButton();
            return;
        }

        $.post("send.php", {name: $name.val(), email: $email.val(), message: $message.val()}, function() {
            swal('Sucesso', 'Seu contato foi enviado!', 'success')
                .then(function(){
                    resetForm();
                });
        }).fail(function(){
            swal('Oops...', 'Algo de errado no envio do email. Tente novamente mais tarde!', 'error');
            resetButton();
        });

        function resetForm() {
            $name.val('');
            $email.val('');
            $message.val('');

            resetButton();

        }

        function resetButton() {
            $btn.removeAttr('disabled');
            $btn.text('ENVIAR');
        }

    });
});