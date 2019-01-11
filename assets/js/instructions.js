var selectStep = function ($el) {
    var idx = $el.index()
    var $blockquote = $el.parent().parent()
    var $instructions = $blockquote.find('.instructions li')
    var i = 0;
    $el.parent().children().each(function () {
        if (i <= idx) {
            $(this).addClass('complete')
            $instructions.eq(i).addClass('complete')
        } else {
            $(this).removeClass('complete')
            $instructions.eq(i).removeClass('complete')
        }
        i++;
    })
    var $img = $blockquote.prev()
    $img.css('background-position', (idx * 100) + '% 0%' )
}

$('.instructions').each(function () {
    var $this = $(this)
    // wrap us
    var $parent = $('<div class="instructions-wrapper">')
    $this.wrap($parent)
    // add the img view
    var $img = $('<div class="instructions-img">')
    $img.css('background-image', 'url(' + $this.attr('src') + ')')
    $this.before($img)
    // make a blockquote
    $this.wrap('<blockquote>')
    // add steps
    var $steps = $('<ol class="instructions-steps">')
    $this.before($steps)
    var i = 1
    $this.children('li').each(function () {
        var $step = $('<li>' + i + '</li>')
        $steps.append($step)
        if (i == 1) {
            selectStep($step)
        }
        i++
    })
})

$('.instructions-steps > li').mouseenter(function () {
    selectStep($(this))
})

$('.instructions-steps > li').click(function () {
    selectStep($(this))
})
