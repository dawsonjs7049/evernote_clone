export default function debounce(a,b,c){
    //function for ensuring that messages to database are only sent after a second 
    //from typing stop rather than every keystroke
    var d,e;
    return function(){
      function h(){
        d=null;
        c||(e=a.apply(f,g));
      }
      var f=this,g=arguments;
      return (clearTimeout(d),d=setTimeout(h,b),c&&!d&&(e=a.apply(f,g)),e)
    }
  }
  
  //removing the html for the preview of the note
  export function removeHTMLTags (str) {
    return str.replace(/<[^>]*>?/gm, '');
  };