function setEmbed(url,target){
    document.getElementById(target).src = url;
}
function getFormInput(Id){
    var x = document.getElementById(Id);
    return x.value;
}
function newIframe(src,Id,height,width){
    
}
function init
class dynamicembeds {
    constructor(type,Id,src,height,width,divsource) {
        this.Id = Id;
        this.type = type;
        this.src = src;
        this.height = height;
        this.width = width;
        if (this.type = "iframe") {
            
        } else if (this.type = "iframewdiv") {
            loc = document.getElementById(divsource);
            div = document.createElement("div");
            div.id = this.Id + "_div";
            iframe = document.createElement("iframe");
            iframe.src = this.src;
            iframe.id = this.Id;
            iframe.height = this.height;
            iframe.width = this.width;
            div.appendChild(iframe);
            loc.appendChild(div);
        }
    }    
}
class dynamiciframe extends dynamicembeds {
    constructor(Id,src,height,width,type,divsource){
        this.Id = Id;
        this.src = src;
        this.height = height;
        this.width = width
        if (type = 1) {
            super(iframewdiv,this.Id,this.src,this.width,this.height,divsource);
        }
    }
}