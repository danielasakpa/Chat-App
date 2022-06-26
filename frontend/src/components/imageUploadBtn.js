import * as React from "react";
import { styled } from "@mui/material/styles";
import {Button, Grid, Stack} from "@mui/material";


const Input = styled("input")({
  display: "none"
});

export default function UploadButtons({ setImageUpload, uploadFile }) {
  return (
    <Stack direction="row" alignItems="center" spacing={2}>
      <Grid container sx={{ mb: 2 }} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
          <label htmlFor="contained-button-file">
            <Input
              accept="image/*"
              fullWidth
              id="contained-button-file"
              onChange={(event) => {
                setImageUpload(event.target.files[0]);
              }}
              multiple
              type="file"
            />
            <Button
              variant="contained"
              fullWidth
              id="form-Button"
              component="span"
            >
              select
            </Button>
          </label>
        </Grid>
        <Grid item xs={6}>
          <Button
            id="form-Button"
            variant="contained"
            onClick={uploadFile}
            fullWidth
            component="span"
          >
            upload
          </Button>
        </Grid>
      </Grid>
    </Stack>
  );
}
