// ------------------------------validation forms
(function () {
    function Validator(form) {
        this.form = form;
        this.emailForm = form.querySelector("input[name='email']");
        this.nameForm = form.querySelector("input[name='userName']");
        this.passwordForm = form.querySelector("input[name='password']");

        this.form.addEventListener("submit", this.validate.bind(this), false);
    }

    Validator.prototype.displayErrors = function () {

        var p = this.form.querySelector(".form-errors");

        if (!p) {
            p = document.createElement("p")
        }


        p.style.color = "red";
        p.className = "form-errors";
        p.innerHTML = this.errors.join("<br>");

        this.form.insertBefore(p, this.form.children[0]);


    }
    Validator.prototype.validatePassword = function (str) {
        var reg = /^(((.*\d.*[A-Z].*[!@#$%^&amp;amp;*? ~].*))|(.*[A-Z].*\d.*[!@#$%^&amp;amp;*? ~].*)|(.*[!@#$%^&amp;amp;*? ~].*[A-Z].*\d.*)|(.*[!@#$%^&amp;amp;*? ~].*\d.*[A-Z].*))$/;
        if (reg.test(str)) {
            return true;
        } else {
            return false;
        }
    }

    Validator.prototype.isEmail = function (text) {
        return text.indexOf("@") !== -1
    };

    Validator.prototype.isNotEmpty = function (text) {
        return text !== "";
    };

    Validator.prototype.validate = function (e) {
        e.preventDefault();

        this.errors = [];

        if (!this.isEmail(this.emailForm.value)) {
            this.errors.push("Insert right email");
            this.emailForm.classList.add("invalid");

        } else {
            this.emailForm.classList.remove("invalid");

        }

        if (!this.isNotEmpty(this.nameForm.value)) {
            this.errors.push("Insert your name");
            this.nameForm.classList.add("invalid");
        } else {
            this.nameForm.classList.remove("invalid");
        }

        if (!this.validatePassword(this.passwordForm.value)) {
            this.errors.push("Insert password(At least one number ,one capital letter, one special character)");
            this.passwordForm.classList.add("invalid");
        } else {
            this.passwordForm.classList.remove("invalid");
        }

        if (this.errors.length) {
            this.displayErrors();
        } else {
            this.form.submit();
        }

    }

    var form = new Validator(document.querySelector('#form'));


})();

