let links=$("a");
for(let i of links){
    let linkS=i.href;
    let thumb=youtube.generateThumbnailUrl(linkS);
    var newI = $('<img/>');
    $(newI.attr("src",thumb));
    $(i).append(newI);
}
