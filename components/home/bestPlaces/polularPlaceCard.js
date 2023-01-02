// import {
//   Card,
//   CardActions,
//   CardContent,
//   CardMedia,
//   Grid,
//   Paper,
//   Rating,
//   Stack,
//   Typography,
// } from "@mui/material";
// import React from "react";

// const polularPlaceCard = ({
//   image,
//   title,
//   description,
//   location,
//   rating,
//   ratingCount,
//   price,
// }) => {
//   return (
//     <Grid item sx={6} sm={4} md={4} lg={4}>
//       <Paper
//         sx={{
//           "&:hover": {
//             boxShadow:
//               "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",
//           },
//           width: "100%",
//           //   maxWidth: '300px',
//         }}
//       >
//         <Stack
//           direction={{ xs: "row", sm: "column" }}
//           sx={{ height: { xs: "10rem", sm: "100%" } }}
//         >
//           <Card>
//             <CardMedia
//               sx={{
//                 height: { xs: "100%", sm: 170 },
//                 width: { xs: "10rem", sm: "100%" },
//               }}
//               image={image}
//               title="green iguana"
//             />
//           </Card>
//           <Stack>
//             <CardContent>
//               <Typography
//                 gutterBottom
//                 variant="normal"
//                 sx={{ color: "#76819E" }}
//               >
//                 {location}
//               </Typography>
//               <Typography gutterBottom variant="h5" component="div">
//                 {title}
//               </Typography>
//               <Typography variant="body2" color="text.secondary">
//                 {description}
//               </Typography>
//             </CardContent>
//             <CardActions>
//               <Stack
//                 sx={{ width: "100%" }}
//                 direction={{ xs: "row" }}
//                 alignItems={"center"}
//                 justifyContent="space-between"
//               >
//                 <Stack direction="row">
//                   <Rating defaultValue={1} max={1}></Rating>
//                   <Typography variant="extraSmall" sx={{ color: "#000" }}>
//                     {rating}
//                   </Typography>
//                   <Typography
//                     variant="extraSmall"
//                     sx={{ color: "#76819E", fontWeight: "900" }}
//                   >
//                     ({ratingCount})
//                   </Typography>
//                 </Stack>
//                 <Stack direction="column">
//                   <Typography variant="extraSmall" sx={{ color: "#76819E" }}>
//                     From
//                   </Typography>
//                   <Typography variant="extraSmall" sx={{ color: "#000" }}>
//                     AED {price}
//                   </Typography>
//                 </Stack>
//               </Stack>
//             </CardActions>
//           </Stack>
//         </Stack>
//       </Paper>
//     </Grid>
//   );
// };

// export default polularPlaceCard;
