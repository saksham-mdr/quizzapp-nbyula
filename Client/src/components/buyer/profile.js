import { useState, useEffect } from "react";

export default function MyProfile() {
  const [edit, setEdit] = useState(false);
  const [loadedData, setLoadedData] = useState();

  const onEdit = (event) => {
    event.preventDefault();
    setEdit((prevState) => !prevState);
    
  };
  useEffect(() => {
    const sendRequest = async () => {
      const storedData = JSON.parse(localStorage.getItem("userData"));
      try {
        const response = await fetch(`http://localhost:5000/myprofile`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer+" + storedData.token,
          },
        });

        const responseData = await response.json();
        setLoadedData(responseData);
      } catch (err) {
        console.log(err);
      }
    };
    sendRequest();
  }, []);
  
  return (
    <div>
      <div class="flex-col w-full mt-6 pl-5">
          <div className="bg-white">
            <div className="max-w-2xl mx-auto py-2 px-4 sm:py-2 sm:px-6 lg:max-w-7xl lg:px-2">
              <h2 className="sr-only">Products</h2>

              <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">

     {loadedData?.length==0 && <div>Not yet attempted any question</div>} 
      { loadedData?.map((val) => {
        return(
              <div className="group">
                
                
                
                <h3 className="mt-4 text-sm text-gray-700">Quiz name: {val.catagory}</h3>
      <p className="mt-1 text-lg font-medium text-gray-900">
      Points:{val.point}
      </p>      
              </div>)
                })}
    </div></div></div></div></div>
  );
}
