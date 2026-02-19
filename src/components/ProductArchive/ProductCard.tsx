type Car = {
  id: string,
  name: string,
  seat: string,
  baseprice: string,
  cabtype: string,
  fueltype: string,
  inclusion: {
    id: string,
    description: string
  }[],
  exclusion: {
    id: string,
    description: string
  }[],
  image: string
}


export default function ProductCard({ car , onClick}: { car: Car, onClick : any}) {

  console.log("THE DATA OF THE PARTICULAR CAR IS : ");
  console.log(car);
  
  return (
    <div className="bg-white rounded-xl shadow-sm border border-sky-100 p-5 flex justify-between items-center hover:shadow-md transition">

      {/* LEFT */}
      <div className="flex gap-4">

        <div className="w-20 h-16 bg-sky-100 rounded-md flex items-center justify-center text-sky-600 font-bold">
          <img src={car.image}/>
        </div>

        <div>

          <h3 className="font-semibold text-sky-900">
            {car.name}<span className="text-xs bg-green-100 text-green-600 px-2 py-0.5 rounded ml-2">NEW</span>
          </h3>

          <p className="text-sm text-sky-600">{car.seat} Seats • AC • 3650 kms included</p>
          <p className="text-xs text-sky-500 mt-1">{car.fueltype}</p>
        </div>
      </div>

      {/* RIGHT */}
      <div className="text-right">
        <p className="text-sm line-through text-gray-400">{car.baseprice + 1000}/per km</p>
        <p className="text-xl font-bold text-sky-600">₹{car.baseprice}/ per km</p>
        <button className="mt-3 bg-sky-500 hover:bg-sky-600 text-white px-5 py-2 rounded-2xl text-sm cursor-pointer" onClick={()=> {onClick(car.id , car.name, car.cabtype, car.fueltype, car.seat, car.baseprice)}}>
          Select Cab
        </button>
      </div>

    </div>
  )
}
