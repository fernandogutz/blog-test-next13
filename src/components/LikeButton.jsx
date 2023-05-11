'use client'

const LikeButton = ({id}) => {
    const handleClick = () => {
        alert('Me gusta el post '+id)
    }

    return (
        <button onClick={handleClick}>Like</button>
    )
}

export default LikeButton