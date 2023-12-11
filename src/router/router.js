var express = require("express");
const router = express.Router();

var { class1 , class2 } = require('../controller/controller');

var jwt = require("jsonwebtoken");
var path = require("path");

var { upload, upload2, upload3 } = require("../middleware/schema");

const HTTP = require("../../constant/response.constant");

function verifyToken(req, res, next) {
  const token = req.headers['authorization'];

  if (!token) {
    return res.status(HTTP.FORBIDDEN).json({ message: 'Token not provided', "status": `${HTTP.FORBIDDEN}` });
  }

  var SECRET_KEY = process.env.SECRET_KEY || "YOURSECRETKEYGOESHERE";
                                              
  jwt.verify(token, SECRET_KEY, (err, decoded) => {
    if (err) {
      return res.status(HTTP.UNAUTHORIZED).json({ message: 'Invalid token', "status": `${HTTP.UNAUTHORIZED}` });
    }

    req.UserName = decoded.UserName;
    req.Phone = decoded.Phone;
    next();
  });
}

router.post("/CreateUser", upload.array("picture"), class1.a);
router.post("/CreateBusiness", upload.array("picture"), class1.b);
router.post("/AddVehicle", verifyToken, upload.array("picture"), class1.c);
router.post("/UserLoginOtpSend", class1.d);
router.post("/UserLoginVerifyOtp", class1.e);
router.post("/BusinessLogin", class1.f);
router.post("/WaitTime" , class1.g);
router.post("/WalletParkInRequest", verifyToken, upload2.fields([{ name: 'valetTicket' }, { name: 'carPicture' }]), class1.h);
// router.post("/WalletParkInRequest1", verifyToken, upload.array("picture"), class1.i);
// router.post("/WalletParkInRequest1", verifyToken, upload3.single('picture'), class1.i);
router.post("/WalletParkInRequest1", verifyToken, upload3.array('picture'), class1.i);
// router.post("/WalletParkInRequest2", verifyToken, upload.array("picture"), class1.j);
router.post("/WalletParkInRequest2", verifyToken, upload3.array('picture'), class1.j);
router.post("/WalletParkInRequest3", verifyToken, class1.j2);
router.post("/UserParkOutRequest", verifyToken, class1.k);
router.post("/WaletRequestAction", verifyToken, class1.l);
router.post("/WaletUpdateUserWaitTime", verifyToken, class1.m);
router.post("/UserWaitTime", class1.n);
// router.get("/UserAccounts", class1.o);
// router.get("/BusinessAccounts", class1.p);
router.get("/Login", class1.q);
router.post("/Login", class1.r);
router.get("/LogOut", class1.s);
router.get("/DashBoard", class1.t);
router.get("/User", class1.u);
router.post("/User", class1.u2);
router.get("/Customer", class1.u3);
router.get("/Customer/:id1", class1.u4);
router.get("/Parking", class1.v);
router.get("/Parking/:id1/:id2/:id3/:id4", class1.v2);
router.get("/Hotel", class1.w);
router.get("/Hotel/:id1/:id2/:id3", class1.w2);
router.get("/Restaurant", class1.x);
router.get("/Restaurant/:id1/:id2/:id3", class1.x2);
router.get("/Mall", class1.y);
router.get("/Mall/:id1/:id2/:id3", class1.y2);
router.get("/Other", class1.z);
router.get("/Other/:id1/:id2/:id3", class1.z2);
router.post("/location", class1.A);
router.post("/location2", class1.B);
router.get("/CustomerRequest", verifyToken, class1.C);
router.get("/AcceptedCustomerRequest", verifyToken, class1.D);  
router.post("/CustomerRequestByRegistrationNumber", verifyToken, class1.E);
router.get("/History", verifyToken, class1.F);
router.get("/status", verifyToken, class1.G);
router.post("/RegistrationNumberCheck", verifyToken, class1.H);
router.post("/StatusChange", class1.I); 
// router.post("/VehicleDeliverByValet", verifyToken, upload2.array("carPicture"), class1.J); 
router.post("/VehicleDeliverByValet", verifyToken, upload3.array('carPicture'), class1.J); 
router.post("/VehicleDeliverByValet2", verifyToken , class1.K);
router.post("/RequestCancleByCustomer", verifyToken , class1.L);
router.post("/RequestCancleByCustomer2", class1.L2);
router.post("/InitilizeNotification", verifyToken , class1.M);
router.get("/Company", class1.N);
router.post("/Model", class1.O);
router.post("/ForgetPasswordOtpSend", class1.P);
router.post("/ForgetPasswordVerifyOtp", class1.Q);
router.post("/NewPassword", class1.R);
// router.post("/AddMember", verifyToken , class1.S);
router.post("/AddMember", verifyToken , class1.S);
router.post("/Notification", verifyToken , class1.T);
router.get("/CustomerPersonalDetails", verifyToken , class1.U);
router.get("/FetchMember", verifyToken , class1.V);
router.get("/ValetPersonalDetails", verifyToken , class1.W);
router.get("/BusinessIntimatelDetails", verifyToken , class1.X);
router.post("/NumberToMember", class1.Y);
router.post("/Search", verifyToken , class1.Z);
router.post("/AddValet", verifyToken , class2.a);
router.get("/ShowValet", verifyToken , class2.b);
router.post("/DeleteValet", verifyToken , class2.c);
router.post("/UpdateValet", verifyToken, upload.array("picture"), class2.d);
router.get("/ShowNotification", verifyToken , class2.e);
router.get("/ParkedCar", verifyToken , class2.f);
router.get("/RequestedCar", verifyToken , class2.g);
router.get("/ReadTime", verifyToken , class2.h);
router.post("/UpdateTime", verifyToken , class2.i);
router.get("/BusinessFirstPage", verifyToken , class2.j);
router.get("/BusinessSendNotification" , class2.k);
router.post("/ValetUpdate", verifyToken, upload.array("picture"), class2.l);

router.get("/AddCompanyData", class2.m);
router.get("/Change" , class2.n);
router.post("/Change", class2.o);

router.get("/PaymentGet", verifyToken, class2.p);
router.post("/PaymentUpdate", class2.q);

module.exports = router;