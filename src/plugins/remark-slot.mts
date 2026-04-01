import {visit} from "unist-util-visit";
const transformer=(node)=>{
	if(node.type==="textDirective"&&node.name==="slot"){
		console.log("\x1b[31mremark\x1b[0m",JSON.stringify(node));
		const children=node.children[0]??undefined;
		if(children.type==="text"){
			children.value=`( ${children.value} )`;
		}
		const data=node.data??(node.data={});
		data.hName="span";
		data.hProperties={
			className:["exam-slot"],
		};
	}
};
export default function remarkSlot(){
	return (tree)=>{
		visit(tree,transformer);
	};
}
