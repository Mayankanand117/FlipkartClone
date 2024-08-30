import User from "../model/user-schema.js";





//userSignup is backend api
// data from frontend comes in request 
// we send data from backend to frontend in response
export const userSignup= async(request , response)=>{
     try{

      const exist=    await User.findOne({username: request.body.username})
         if(exist){
          return response.status(401).json({message:'Username already exist'})
         }
    const user=request.body;
    // whatever came from frontend i.e. request.body needs to passed from userSchema 
    const newUser = User(user);
    // save the data into database 
    await newUser.save()

    response.status(200).json({message:user})
     }
     catch(error){
       response.status(500).json({message:error.message})
     }
} 


export const userLogin= async(request, response) =>{
     try{
             const username = request.body.username
             const password = request.body.password;

            let user=  await User.findOne({username: username , password: password})
             if(user){
               return response.status(200).json({data:user} )    
             }
             else{
               return response.status(401).json('Invalid login')
             }
     }
     catch(error){
        response.status(500).json({message:error.message})
     }
}