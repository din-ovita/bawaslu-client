import React, { useEffect, useState } from "react";
import Header from "../../../../component/Header";
import Sidebar from "../../../../component/Sidebar";
import Footer from "../../../../component/Footer";
import { API_DUMMY } from "../../../../utils/base_URL";
import axios from "axios";
import Swal from "sweetalert2";
import {
  useHistory,
  useParams,
} from "react-router-dom/cjs/react-router-dom.min";

function EditCarousel() {
  const [file, setFile] = useState("");
  const [namaCarousel, setNamaCarousel] = useState("");
  const param = useParams();
  const history = useHistory();
  const [carouselData, setCarouselData] = useState({});

  useEffect(() => {
    axios
      .get(`${API_DUMMY}/bawaslu/api/carousel/ById/` + param.id, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        const responseData = response.data;
        console.log("carousel : ", responseData);
        setCarouselData(responseData);
        setNamaCarousel(responseData.namaCarousel);
        setFile(responseData.file);
      })
      .catch((error) => {
        if (error.ressponse && error.response.status === 401) {
          localStorage.clear();
          history.push("/login");
        } else {
          console.log(error);
        }
      });
  }, [param.id]);

  //edit pengumuman
  const update = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("namaCarousel", namaCarousel);
    formData.append("file", file);

    await axios
      .put(`${API_DUMMY}/bawaslu/api/carousel/` + param.id, formData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Berhasil Mengedit Data Carousel",
          showConfirmButton: false,
          timer: 1500,
        });
        history.push("/admin-page-carousel");
        setTimeout(() => {
          window.location.reload();
        }, 1500);
      })
      .catch((error) => {
        if (error.ressponse && error.response.status === 401) {
          localStorage.clear();
          history.push("/login");
        } else {
          console.log(error);
        }
      });
  };

  return (
    <div className="app-container app-theme-white body-tabs-shadow fixed-sidebar fixed-header">
      <Header />
      <div className="app-main">
        <Sidebar />
        <div className="container mt-3 app-main__outer">
          <div className="card shadow">
            <div className="card-body">
              <h1 className="fs-4">Form Edit Data</h1>
              <hr />
              <form onSubmit={update}>
                <div className="row">
                  <div className="mb-3 col-lg-6">
                    <label
                      for="exampleInputEmail1"
                      className="form-label font-weight-bold">
                      Name Carousel
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      value={namaCarousel}
                      onChange={(e) => setNamaCarousel(e.target.value)}
                    />
                  </div>
                  <div className="mb-3 col-lg-6">
                    <label
                      for="exampleInputPassword1"
                      className="form-label font-weight-bold">
                      Image
                    </label>
                    <input
                      type="file"
                      onChange={(e) => setFile(e.target.files[0])}
                      className="form-control"
                      id="exampleInputPassword1"
                    />
                  </div>
                </div>
                <button type="button" className="btn-danger mt-3 mr-3">
                  <a
                    href="/admin-page-carousel"
                    style={{ color: "white", textDecoration: "none" }}>
                    Batal
                  </a>
                </button>
                <button type="submit" className="btn-primary mt-3">
                  Simpan
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditCarousel;
