import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Card from "../Component/Card";
import axios from "axios";
import API_URL from "../Helpers/API_URL";
import formatToCurrency from "../Helpers/formatToCurrency";

function ProductDetail() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { isLogin } = useSelector((state) => state.user);
  console.log(data);

  const params = useParams();
  const { product_name } = params;
  const fetchProductDetails = async () => {
    try {
      product_name = product_name.split("-").join(" ");
      let res = await axios.get(
        `${API_URL}/product/product-details/${product_name}`
      );
      console.log(res);
      setData(res.data.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchProductDetails();
  }, []);
  if (loading) {
    return <div>Loading ...</div>;
  }
  return (
    <div className="h-full w-screen bg-green-200 flex justify-center pt-20">
      <div className="container h-full flex flex-col px-24 py-11">
        Products/1
        <div className="w-full mt-9 border border-white grid grid-cols-1 lg:grid-cols-2 gap-x-32">
          <div className="flex flex-col w-full gap-y-6 items-center">
            <div className="h-[300px] w-[400px] bg-white"></div>
            <div className="hidden lg:flex justify-center gap-x-2 ">
              <button className="w-36 h-12 bg-green-700">chat admin</button>
              <button className="w-36 h-12 bg-green-700">Bagikan</button>
            </div>
          </div>
          <div className="w-full h-full border border-putih flex flex-col mr-28">
            <div className="h-[300px] w-full bg-white flex flex-col">
              <div className="text-sm mb-1">{data.principal}</div>
              <div className="text-2xl mb-5">{data.name}</div>
              <div className="text-2xl mb-3">
                {formatToCurrency(data.price)}
              </div>
              <div className="text-base mb-6">
                <span className="text-danger font-semibold border-2 border-danger text-xs rounded p-1">{`${data.promo}%`}</span>{" "}
                <span className="line-through text-neutral-gray text-sm">
                  {formatToCurrency(data.initPrice)}
                </span>
              </div>
              <div className="h-10 mb-11 flex items-center gap-x-4 border border-black">
                <div className="w-40 h-full border border-green-600 flex justify-center items-center">
                  Button qty
                </div>
                <div>{data.stock}</div>
              </div>
              <div className="flex gap-x-4 h-12 mb-20">
                <button
                  className="h-full w-40 border border-green-600 hover:bg-green-600"
                  onClick={() => {
                    isLogin ? navigate("/cart") : navigate("/login");
                  }}
                >
                  Keranjang
                </button>
                <button
                  className="h-full w-40 border border-green-600 hover:bg-green-600"
                  onClick={() => {
                    isLogin ? navigate("/cart") : navigate("/login");
                  }}
                >
                  Beli
                </button>
                <button className="h-full w-40 border border-green-600">
                  fav
                </button>
              </div>
            </div>
            <div className="w-full border border-black h-14 flex">
              <button className="h-full w-1/3 flex justify-center items-center">
                Deskripsi
              </button>
              <button className="h-full w-1/3 flex justify-center items-center">
                Cara Pakai
              </button>
              <button className="h-full w-1/3 flex justify-center items-center">
                Peringatan
              </button>
            </div>
            <div className="w-full h-80 py-5 mb-12 flex border border-gray-700">
              <div className="h-full w-1/2 font-bold">Info</div>
              <div className="h-full w-1/2">keterangan</div>
            </div>
          </div>
        </div>
        <div className="w-full border-t-[.5px] border-blackh-20 bg-white flex py-28 relative">
          <div className="absolute left-3 top-10 text-2xl">
            Lorem, ipsum dolor.
          </div>
          {/* <Card /> */}
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
