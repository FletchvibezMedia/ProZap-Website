import {spawn} from "node:child_process";

const forwarded=[];
for(let index=0;index<process.argv.slice(2).length;index+=1){
  const args=process.argv.slice(2);
  if(args[index]==="--host"){
    forwarded.push("-H",args[index+1]);
    index+=1;
  }else if(args[index]!=="--strictPort"){
    forwarded.push(args[index]);
  }
}

const child=spawn(process.platform==="win32"?"next.cmd":"next",["dev",...forwarded],{
  stdio:"inherit",
  shell:process.platform==="win32"
});

child.on("exit",code=>process.exit(code??1));
