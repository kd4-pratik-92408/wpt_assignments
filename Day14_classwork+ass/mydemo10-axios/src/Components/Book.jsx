

 function Book({srno,title,author,category,price}){

    return <div className="border border-3 m-3 p-3 bg-bg-primary-subtle text-center d-inline-block">
        <div><img src={`https://nilesh-g.github.io/learn-web/JS/images/webp/book${srno}.webp`} alt="" /></div>
        <div>Title{title}</div>
        <div>Author{author}</div>
        <div>Category{category}</div>
        <div>Price{price}</div>
    </div>


}
export default Book