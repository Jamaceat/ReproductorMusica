const item = (title, author, duration) => {
	return `			<ul\
    class=\"flex flex-row flex-nowrap w-9/10 justify-center items-center py-4 m-3 rounded objeto\"\
>\
    <li class=\"pl-3 flex-grow w-1/4 text-ellipsis overflow-hidden\">\
        ${title}\
    </li>\
    <li class=\"pl-3 flex-grow w-1/4 text-ellipsis overflow-hidden\">\
    ${author}\
    </li>\
    <li class=\"pl-3 flex-grow w-1/4 text-ellipsis overflow-hidden\">${duration}</li>\
    <li class=\"pl-3 flex-grow w-1/4 text-center\">\
        <button class=\"play rounded\">\
            <span></span>\
        </button>\
        <button>\
            <span class=\"eliminar rounded\"></span>\
        </button>\
    </li>\
</ul>`
}
