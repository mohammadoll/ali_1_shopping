import { AddShoppingCartOutlined } from "@mui/icons-material";
import { Box, Button, Stack, Typography } from "@mui/material";

const ProductDetails = () => {
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 2.5,
    flexDirection:{xs:"column" , sm:"row"  } }}>
      <Box sx={{display:"flex"}} >
        <img
          src="data:image/jpeg;base64,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"
          width={300}
          alt=""
        />
      </Box>

      <Box sx={{ textAlign:{xs:"center", sm:"left"} }} >
        <Typography variant="h5">WOMEN'S FASHION</Typography>

        <Typography
          color={"crimson"}
          variant="body1"
          my={0.4}
          fontSize={"22px"}
        >
          $12.99
        </Typography>
        <Typography variant="body1">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>

        <Stack sx={{justifyContent:{xs:"center",sm:"left"}}} gap={1} my={2} direction={"row"}>
          {[
            "https://contents.mediadecathlon.com/p2195009/k$31470094714c218af27a0ed9329b90c3/mens-country-walking-raincoat-nh100-raincut-demi-zip.jpg?format=auto&quality=70&f=768x768",
            "data:image/jpeg;base64,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",
            "https://contents.mediadecathlon.com/p2195003/k$97b2f7929d880a657a65fb7db790ae51/mens-country-walking-raincoat-nh100-raincut-demi-zip.jpg?format=auto&quality=70&f=1366x1366",
          ].map((juju) => {
            return (
              <img
              height={100}
                style={{ borderRadius: 3 }}
                width={90}
                key={juju}
                src={juju}
                alt=""
              />
            );
          })}
        </Stack>
        <Button sx={{textTransform:"capitalize",mb:{xs:1,sm:0}}} variant="contained" >
    <AddShoppingCartOutlined sx={{mr:1}} fontSize="small" />
          Buy now
        </Button>
      </Box>
    </Box>
  );
};

export default ProductDetails;
