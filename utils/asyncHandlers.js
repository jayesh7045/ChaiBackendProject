// const asyncHandler = (fun)=>{
//     async(req, res, next)=>{
//         try{
//             await fun(req, res, next)
//         }
//         catch(err){
//             res.status(err.code || 3000).json({
//                 success : false,
//                 message : err.message
//             })
//         }
//     }
// }


const asyncHandler=(func)=>{
    (req, res, next)=>{
        Promise.resolve(func(req, res, next)).catch((err)=>next(err));
    }
}

