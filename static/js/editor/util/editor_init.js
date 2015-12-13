/**
 * Created by david on 12/13/15.
 */
CodeMirror.commands.save = function(instance){
    file = instance.getValue();
    vm.save(file);

};

var editor = CodeMirror.fromTextArea(document.getElementById("code"), {
    mode: "javascript"
});