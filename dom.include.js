
/*
    A simpple plugin which can indlude external dom  in a html element.
    Copright 2018 , Wirtten by Shanto Islam. 
    github: shantoislam6;

*/
(function(){
    class FileInluder{

    constructor(){

        //finding the all element
        this.allElement = document.getElementsByTagName('*');

    }

    start(){

        //fingin each element where user will set attribut 'dom-include' 
        Array.from(this.allElement).forEach(function (elem){

            var path = elem.getAttribute('dom-include');

            //when which element have their attribute with their path value then this condition work 
            if(path != null){

            //Make sure browsers where this http object work
            if (window.XMLHttpRequest) {

                    // for modern browsers
                    var xhr = new XMLHttpRequest();

                } else {

                    // for old IE browsers
                    var xhr = new ActiveXObject("Microsoft.XMLHTTP");
                }

                //get dom
                xhr.open('get', path , true );

                xhr.addEventListener('load',getDom,false);

                //final result 
                function getDom(){
                    
                    if(this.status == 200){

                        elem.innerHTML = this.responseText;

                    }else{
                        
                        elem.innerHTML = "<h1 style=\"color:red;margin:50px\">Your file is not found!<br><h1>";

                    }

                }
                //send requeste at server 
                xhr.send(null);

            }
        });
    }


    }   
    //start the full functionality
    const $inc$ = new FileInluder().start();
})();
/*Coming soon A nice plugin from wild blood*/