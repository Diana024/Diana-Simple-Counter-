import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = (props) => {
	//Aqui hago toda las consultas
	console.log(props);
	return (
	//Lo que devuleven los props.
		<div className="m-3 d-flex bg-dark justify-content-center pt-4 pb-4 text font-family-serif">
			<>
			<h1 className="text-center text-white p-4 bg-gradient fs-1 border border-end-0 border border-light fs-1 rounded mx-2 px-3">
				<i class="far fa-clock Light link"></i>
			</h1>
			<h1 className="text-center text-white p-4 bg-gradient fs-1 border border-start-0 border border-light fs-1 rounded mx-2 px-3">{props.digito6}</h1>
			<h1 className="text-center text-white p-4 bg-gradient fs-1 border border-start-0 border border-light fs-1 rounded mx-2 px-3">{props.digito5}</h1>
			<h1 className="text-center text-white p-4 bg-gradient fs-1 border border-start-0 border border-light fs-1 rounded mx-2 px-3">{props.digito4}</h1>
			<h1 className="text-center text-white p-4 bg-gradient fs-1 border border-start-0 border border-light fs-1 rounded mx-2 px-3">{props.digito3}</h1>
			<h1 className="text-center text-white p-4 bg-gradient fs-1 border border-start-0 border border-light fs-1 rounded mx-2 px-3">{props.digito2}</h1>
			<h1 className="text-center text-white p-4 bg-gradient fs-1 border border-start-0 border border-light fs-1 rounded mx-2 px-3">{props.digito1}</h1>
			</>
		</div>
		
	);
};


export default Home;
