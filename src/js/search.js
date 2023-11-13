$(function (){
    console.log('cccccc',)
    initFormSearch()
    brandInit()
    adScrollInit()
})

function adScrollInit(){
    var adDom =$('#ad')
    var maxHeight=$(adDom).children().length * $(adDom).height()
    setInterval(function () {
        var curTop=Math.abs(parseInt($(ad).offset().top))+$(adDom).height()
        if(curTop>=maxHeight){
             $(ad).css('transition','all 0s ease 0s').css('transform','translateY(0)')
        }else{
            $(ad).css('transition','all 0.5s ease 0s').css('transform','translateY(-'+curTop+'px)')
        }
    },1000)
}


function initFormSearch(){
    var dorpdom =$('#ynw-dropdown')
    var dropDownItem=$('#ynw-dropdown .ynw-dropdown-item')
    $('.ynw-search-form #sortBtn').on('click',function (e) {
        var top = $(this).offset().top+$(this).height() + 'px'
        $(dorpdom).css('top',top).toggle()
    })

    $(dorpdom).on('click',function () {
        $(this).toggle()
    })

    $(dropDownItem).on('click',function(e){
        $('.ynw-search-form #sortBtn>span').text($(this).text()).addClass('search-active')
        $('.ynw-search-form #sortBtn').addClass('search-active')
    })
}

// 品牌选择
function brandInit(){
    var brandDrownBtn=$('#brandBtn')
    var brandModal=$('#ynw-brand-modal')
    var brandModalClose =$('#brand-close-btn')
    // 点击品牌下拉 展示弹窗
    brandDrownBtn.on('click',function (e) {
        $(brandModal).css('transform','translateX(0)')
    })
    // 关闭弹窗
    brandModalClose.on('click',function (e) {
        $(brandModal).css('transform','translateX(100%)')
    })


    // 选择品牌
    var brandLetters=$('#brand-letters a')
    brandLetters.on('click',function (){
        var text=$(this).text()
        $('.choosed-brand').text(text).fadeIn().fadeOut()
    })

    var brandItem=$('.me-brand-select-group-item')
    var hotBrandItem=$('.me-brand-select-hot-item')
    var scendBrandWrap =$('.scend-brand')
    var screenWidth = $('body').width()

    // 切换显示二级品牌选择
    function toggleScendBrand(){
        var scendBrandLeft=$(scendBrandWrap).offset().left
        if(scendBrandLeft===screenWidth){
            // show
            $(scendBrandWrap).css('transform','translateX(0)')
        }else{
            // hide
            $(scendBrandWrap).css('transform','translateX(100%)')
        }
    }

    hotBrandItem.on('click',function (e) {
        console.log(e,'点击了热门品牌')
        toggleScendBrand()
    })
    brandItem.on('click',function (e) {
        console.log(e,'点击了品牌')
        toggleScendBrand()
    })
}


// 列表点击
function resultClcik(){
    window.location='/detail.html?id=1'
}

// tag 操作
function tagClear(e){
    // var tagBtn=$('#clearTagsBtn')
    // tagBtn.on('click',)
    $(".filter-tags").remove()
    console.log('eee',e)
}