let a=document.links;
Array.from(a).forEach(function(element)
{
    if(element.href.includes('cpp'))
    {
        console.log(element);
    }
})