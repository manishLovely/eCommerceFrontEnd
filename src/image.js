export function ProductImage({offer,imageUrl}) {
    return (
        <div style="position:relative;">
            <img src={imageUrl} width="150px"
                height="100px" alt="image"/>
                <div style="position:absolute;background-color:black;top:0;right:0;z-index:1;"><span style="color:white;">{offer}</span></div>
        </div>
    )


}