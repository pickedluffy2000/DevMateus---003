
class OneAcademy  {

    constructor(){

        console.log("OneAcademy ok");

        this.elementsPrototype();
        this.loadElements();
        this.initEvents();

    }

    loadElements(){

        this.el = {};

        document.querySelectorAll('[id]').forEach(element=>{

            this.el[Format.getCamelCase(element.id)] = element;

        });

    }

    elementsPrototype(){

        Element.prototype.hide = function(){
            this.style.display = 'none';
            return this;
        }

        Element.prototype.show = function(){
            this.style.display = 'block';
            return this;
        }

        Element.prototype.toogle = function(){
            this.style.display = (this.style.display === 'none') ? 'block' : 'none';
            return this;
        }

        Element.prototype.on = function(events, fn){
           events.split(' ').forEach(event=>{
              this.addEventListener(event, fn);
           });
           return this;
        }

        Element.prototype.css = function(styles){
           for(let name in styles){
               this.style[name] = styles[name];
           }
           return this;
         }

         Element.prototype.addClass = function(name){
           this.classList.add(name);
           return this;
          }

          Element.prototype.removeClass = function(name){
            this.classList.remove(name);
            return this;
           }

           Element.prototype.toogleClass = function(name){
            this.classList.toogle(name);
            return this;
           }

           Element.prototype.hasClass = function(name){
            return this.classList.contains(name);
           }

    }

    initEvents(){

        this.el.toogleBtnFive.on('click', e=>{
            this.el.cardContentFive.toogle();
        });

        this.el.cardContentFive.css({
            display: 'none'
        });


        this.el.toogleBtnFour.on('click', e=>{
            this.el.cardContentFour.toogle();
        });

        this.el.cardContentFour.css({
            display: 'none'
        });


        this.el.toogleBtnTree.on('click', e=>{
            this.el.cardContentTree.toogle();
        });

        this.el.cardContentTree.css({
            display: 'none'
        });


        this.el.toogleBtnTwo.on('click', e=>{
            this.el.cardContentTwo.toogle();
        });

        this.el.cardContentTwo.css({
            display: 'none'
        });

        this.el.toogleBtnOne.on('click', e=>{
            this.el.cardContentOne.toogle();
        });

        this.el.cardContentOne.css({
            display: 'none'
        });


    }

}