const crw =
    import("./node_modules/cross_rust_wasm/cross_rust_wasm.js");

crw.then(crw => {
    crw.greet();
    console.log(crw.gen_obj_info_str("11", 11, "11"));
    //cross_rust_wasm
    eq = crw.gen_quaternion(1, 1, 1, 1);
    console.log("gen_quaternion:", eq.x, eq.y, eq.z, eq.w);
});