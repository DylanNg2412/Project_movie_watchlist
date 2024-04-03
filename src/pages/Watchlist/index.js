import Navbar from "../../components/Navbar";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions, CardContent } from "@mui/material";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

export default function Watchlist() {
  const watchlists = [];

  return (
    <>
      <Navbar />
      <Container>
        <Typography variant="h3">Your Watch List</Typography>
        {watchlists.length > 0 ? (
          <Grid container spacing={2}>
            {watchlists.map((watchlist) => {
              return (
                <Grid
                  item
                  xs={4}
                  sx={{
                    columnSpan: "2",
                  }}
                >
                  <Card
                    sx={{
                      maxWidth: "690px",
                      rowspan: "2",
                    }}
                  >
                    <CardActionArea>
                      <CardContent>{watchlist.title}</CardContent>
                    </CardActionArea>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        ) : (
          <>
            {/* Link button to add new movie into local storage */}
            <Card>
              <Typography
                variant="h5"
                sx={{
                  padding: "10px",
                }}
              >
                No movies added to your watch list yet
              </Typography>
              <CardActions>
                <Button>Add Movies to your watch list</Button>
              </CardActions>
            </Card>
          </>
        )}
      </Container>
    </>
  );
}
