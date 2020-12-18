let menuBtn = document.querySelector(".header__content-mobileBtn")
let menuContent = document.querySelector(".header__content-menu")
let section = document.querySelectorAll(".section")
let menuList = document.querySelectorAll(".header__content-list")
let menuItem = document.querySelectorAll(".header__content-item")
let header = document.querySelector(".header")
let disBtn = document.querySelector(".banner__content-btn")
let bannerContent = document.querySelector(".banner__content")
let animate = document.querySelectorAll(".animation")
let app = {
    init:function(){
        this.menu()
        this.animation()
        this.banner()
    },

    menu:function(){
        window.addEventListener("scroll",()=>{
            if (scrollY > 0) {
                header.classList.add("show")
            }
            else{
                header.classList.remove("show")
            }
        })
        menuBtn.addEventListener("click",()=>{
            menuContent.classList.toggle("show")
        })
        menuList.forEach((btn,i)=>{
            btn.addEventListener("click",(e)=>{
                menuContent.classList.remove("show")
                e.preventDefault()
                let pos = section[i].offsetTop
                window.scrollTo({
                    top:pos,
                    behavior: 'smooth'
                })
            })
            window.addEventListener("scroll",()=>{
                if (scrollY >= section[i].offsetTop-10 ) {
                    menuItem.forEach(color=>{
                        color.classList.remove("show")
                    })
                    menuItem[i].classList.add("show")
                }
                else{
                    menuItem[i].classList.remove("show")
                }
            })
        })
    },

    banner:function(){
        disBtn.addEventListener("click",()=>{
            let pos = section[0].offsetTop
            window.scrollTo({
                top:pos,
                behavior: 'smooth'
            })
        })
        bannerContent.classList.add("show")
    },

    animation:function(){
            section.forEach((section,index)=>{
                let pos = section.offsetTop
                window.addEventListener("scroll",()=>{
                    if (scrollY >= pos-220) {
                        animate[index].classList.add("show")
                    }
                })
            })
    }
}

app.init()