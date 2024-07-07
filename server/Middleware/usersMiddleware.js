   
 export  function validate(request,response,next){
    const { firstName, lastName, email, password } = request.body;

    if (!firstName) {
        response.status(400).json({success:false,message:"first name is required"});}
        
        if (!lastName) {
            response.status(400).json({success:false,message:"last name is required"});}

            if (!email) {
                response.status(400).json({success:false,message:"email is required"});}


                if (!password) {
                    response.status(400).json({success:false,message:"password is required"});}
                    next()
   }     
