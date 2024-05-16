function changeBackColorNav ()
{
    let btn = document.querySelector( '.navbar-expand-lg .navbar-toggler' );
    let navbar = document.querySelector( '.navbar' );

    btn.addEventListener( 'click', function ()
    {
        if ( !navbar.classList.contains( 'toggle-nav-color' ) )
        {
            navbar.classList.add( 'toggle-nav-color' );
        } else if ( navbar.classList.contains( 'toggle-nav-color' ) && document.documentElement.scrollTop < 30 )
        {
            navbar.classList.remove( 'toggle-nav-color' );
        }
    } );
}

changeBackColorNav();

// ---------------------------------

// type text in home and counter
window.addEventListener( 'load', () =>
{
    let textElement = document.querySelector( ".load-text" );
    let paragraph = "Crafting dream gardens with passion, creativity and sustainability for over a decade with our experienced landscape artists and gardener teams.";
    textElement.textContent = "";
    let index = 0;

    function typeEffect ()
    {
        if ( index < paragraph.length )
        {
            textElement.textContent += paragraph[ index ];
            index++;
        } else
        {
            clearInterval( typing );
        }
    }
    const typing = setInterval( typeEffect, 20 );

    let counter = document.querySelector( ".counter" );
    let counterMax = 500;
    let target = 0;
    function counterClients ()
    {
        if ( target < counterMax )
        {
            target += 10;
            counter.textContent = target + '+';
        } else
        {
            clearInterval( counterLoad );
        }
    }
    const counterLoad = setInterval( counterClients, 30 );
} );


// ---------------------------------

// change color of nav when scroll
window.addEventListener( 'scroll', () =>
{
    let navbar = document.querySelector( '.navbar' );
    if ( document.documentElement.scrollTop >= 30 )
    {
        navbar.classList.add( 'toggle-nav-color' );
    }
    else
    {
        navbar.classList.remove( 'toggle-nav-color' );
    }
} );


// ---------------------------------

let images = document.querySelectorAll( ".pic" );
function expandImages ()
{
    images.forEach( ( img ) =>
    {
        img.addEventListener( 'click', () =>
        {
            removeActiveClass();
            img.classList.add( "active" );
        } );
    } );
}

function removeActiveClass ()
{
    images.forEach( ( img ) =>
    {
        img.classList.remove( "active" );
    } );

}
expandImages();

// ------------------------------------------


function swapImages ()
{
    const nextButton = document.getElementById( "nextButton" );
    const images = document.querySelectorAll( ".images-swap .pic" );
    let currentIndex = 0;

    function updateBackground ()
    {
        const nextIndex = ( currentIndex + 1 ) % images.length;
        nextButton.style.backgroundImage = `url(${ images[ nextIndex ].querySelector( 'img' ).src })`;
    }

    updateBackground();

    nextButton.addEventListener( 'click', () =>
    {
        images.forEach( ele => ele.classList.remove( 'active-on' ) );
        currentIndex = ( currentIndex + 1 ) % images.length;
        images[ currentIndex ].classList.add( 'active-on' );
        updateBackground();
    } );
}

swapImages();

// --------------------------------

// to scroll move top auto
function ScrollUp ()
{
    let btn = document.querySelector( "#scrollUp" );
    if ( document.documentElement.scrollTop >= 120 )
    {
        btn.classList.remove( 'opacity-0' );
        btn.addEventListener( 'click', () =>
        {
            window.scrollTo( {
                top: 0,
                behavior: 'smooth'
            } );
        } );
    }
    else
    {
        btn.classList.add( 'opacity-0' );
    }

}
window.addEventListener( 'scroll', ScrollUp );


// ---------------------------------

function openMail ()
{
    let input = document.querySelector( ".input-box input" );
    let btn = document.querySelector( ".input-box .input-go" );
    btn.addEventListener( 'click', () =>
    {
        btn.href = `mailto:${ input.value }`;
    } );
}

openMail();