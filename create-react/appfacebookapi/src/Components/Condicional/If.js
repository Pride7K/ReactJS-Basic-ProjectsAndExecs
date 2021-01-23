export default props =>{
    const elseChild = props.children.filter(item=>
        { return item.type && item.type.name === "Else"})[0]

    const ifChildren =  props.children.filter(item=>
        { return  item !== elseChild });

    if(props.test)
    {
        return ifChildren
    }
    else if (elseChild)
    {
        return elseChild
    }
    else
    {
        return false
    }
}

export const Else = props=>
    props.children
