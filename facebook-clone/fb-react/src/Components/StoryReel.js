import React from 'react'
import Story from './Story'
import './StoryReel.css'

const StoryReel = () => {
    return (
        <div className="storyReel">
            <Story
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4a5Bt7I9U-OmyyREPDw2cbgsb6syNxQr-YX0eMpBiAVmXKdAKnCejNtWlqSW8O-6MXQw&usqp=CAU"
                profileSrc="https://scontent.fcok6-1.fna.fbcdn.net/v/t1.6435-1/p200x200/40020437_254135421905290_2323882700785582080_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=7206a8&_nc_ohc=CgK5MlB63ZsAX_XAkfM&_nc_ht=scontent.fcok6-1.fna&tp=6&oh=3efd9d7f177c169e5bd4f2ac524c5cf5&oe=60E76BE8"
                title="Deepak"
            />
            <Story
                image="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
                profileSrc="https://scontent.fcok6-1.fna.fbcdn.net/v/t31.18172-1/c0.0.200.200a/p200x200/13119796_576213825872223_3129987963242744693_o.jpg?_nc_cat=101&ccb=1-3&_nc_sid=7206a8&_nc_ohc=U7_jhoFK9o4AX8scVnW&_nc_ht=scontent.fcok6-1.fna&tp=27&oh=32a0216cdab23ebd5ec46d10e52e2b94&oe=60E6E752"
                title="Vighnesh J Krishna"
            />
            <Story
                image="https://i.pinimg.com/originals/83/64/66/83646654668bf9ae412f45bb2e417ddf.jpg"
                profileSrc="https://scontent.fcok6-1.fna.fbcdn.net/v/t1.6435-1/c0.13.200.200a/p200x200/70964615_473464276838454_2477513311596314624_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=7206a8&_nc_ohc=RaC85j13b_IAX-58jvG&_nc_ht=scontent.fcok6-1.fna&tp=27&oh=f856a96a5ffaa96fb2a6be8619f31699&oe=60E65343"
                title="Joshy"
            />
        </div>
    )
}

export default StoryReel
