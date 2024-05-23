export { Card }

function Card({img, title="shoes", price=100, quant}){

    return(
        <div className="card card-compact w-52 bg-base-100 shadow-xl">
            <img src="https://i.pravatar.cc/" alt="" />
              <div class="card-body">
                    <h2 class="card-title">{title}</h2>
                    <div class="card-actions justify-end">
                        <div>
                            <span>{price}</span>
                        </div>
                        <button class="btn btn-primary">Buy Now</button>
                    </div>
              </div>
        </div>
    )
}