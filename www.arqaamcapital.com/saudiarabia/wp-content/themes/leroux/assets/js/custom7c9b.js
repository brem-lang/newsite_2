jQuery(document).ready(function(){
    console.log(1);
    if(jQuery('body').hasClass('rtl')){
        jQuery('#qodef-page-footer-top-area-inner h4').each(function() {
            // get element text
            var text = jQuery(this).text();
            // modify text
            text = text.replace('Our Firm', 'الشركة');
            text = text.replace('Services', 'الخدمات');
            text = text.replace('Our Offices', 'المكاتب');
            // update element text
            jQuery(this).text(text); 
        });
        jQuery('input[placeholder="Name"]').attr('placeholder', 'اسم');
        jQuery('input[placeholder="Phone Number"]').attr('placeholder', 'رقم الهاتف');
        jQuery('input[placeholder="E-mail address"]').attr('placeholder', 'عنوان البريد الإلكتروني');
        jQuery('textarea[placeholder="Message"]').attr('placeholder', 'رسالة');
        jQuery('.qodef-main-form.qodef-layout--columns .wpcf7-submit .qodef-m-text').text(jQuery('.qodef-main-form.qodef-layout--columns .wpcf7-submit .qodef-m-text').text().replace('Send', 'إرسال'))
        jQuery('#qodef-page-header .qodef-button .qodef-m-text').each(function() {
            var text = jQuery(this).text();
            text = text.replace('Login', 'تسجيل الدخول');
            jQuery(this).text(text); 
        });
        jQuery('.qodef-e-read-more .qodef-m-text').each(function() {
            var text = jQuery(this).text();
            text = text.replace('Read More', 'المزيد');
            jQuery(this).text(text); 
        });
    }

});