// const elList = document.querySelectorAll('.list__item')

// console.log(elList[1].textContent = 'o\'zgartirildi')

let elHeader = document.querySelector('.header')

let fall = 80
let supercontrak = 100 
let kantrak = 150 
let grant = 200

let username = prompt('Ismingizni kiriting')

let ball = prompt(username + ' to\'plagan balingizni kiriting') -0

if(ball > fall){
    if(ball > supercontrak){
        if(ball > kantrak){
            if(ball > grant){
                elHeader.textContent = username + ' Ballni xato kiritdingiz'
            }else{
                elHeader.textContent = username + ' Tabriklaymiz Grant asosida o\'qishga qabul qilindingiz !!!'
            }
        }else{
            let confirmstudent = confirm(username + ' siz kantrakt asosida o\'qishga tafsiya etildingiz, kantrak miqdori yiliga $2000 \n Rozimisiz?')-0
            if(confirmstudent){
                let money = prompt(username + ' qancha pulingiz bor?') -0
                if(money >= 2000){
                    elHeader.textContent =username + ' Kantrakt asosida o\'qishga qabul qilindingiz'
                }else{
                    elHeader.textContent =username + ' O\'qishga qabul qilinmadingiz'
                }
            }
        }
    }else{
        let confirmstudent = confirm(username + ' siz super-kantrakt asosida o\'qishga tafsiya etildingiz, kantrak miqdori yiliga $3000 \n Rozimisiz?')-0
            if(confirmstudent){
                let supermoney = prompt(username + ' qancha pulingiz bor?') -0
                if(supermoney >= 3000){
                    elHeader.textContent =username + ' super-kantrakt asosida o\'qishga qabul qilindingiz'
                }else{
                    elHeader.textContent =username + ' O\'qishga qabul qilinmadingiz'
                }
            }
        }
}else{
    elHeader.textContent =username + ' O\'qishga qabul qilinmadingiz'
}