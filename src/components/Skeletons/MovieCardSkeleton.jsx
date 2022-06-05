import Box from "components/Box";
import Skeleton from "@mui/material/Skeleton";

export default function MovieCardSkeleton() {
  return (
    <Box>
      <Skeleton variant="text" />
      <Skeleton variant="text" width="25%" />
    </Box>
  );
}
