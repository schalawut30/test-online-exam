
const s=schoolSelect,e=examSelect,info=examInfo;
schools.forEach(v=>{let o=new Option(v,v);s.add(o);});
exams.forEach(v=>{let o=new Option(v.title,v.id);e.add(o);});
e.onchange=()=>{const x=exams.find(a=>a.id===e.value);if(!x){info.classList.add('hidden');return;}
info.classList.remove('hidden');info.innerHTML=`<b>${x.title}</b><br>${x.description}<br>เวลา ${x.time} นาที | ผ่าน ${x.passScore}%`;};
startExamBtn.onclick = () => {

    // ตรวจสอบข้อมูล
    if (
        !fullname.value.trim() ||
        !s.value ||
        !e.value
    ) {
        alert("กรุณากรอกข้อมูลให้ครบ");
        return;
    }

    // ค้นหาชุดข้อสอบ
    const ex = exams.find(a => a.id === e.value);

    if (!ex) {
        alert("ไม่พบชุดข้อสอบ");
        return;
    }

    // สร้างข้อมูลผู้เข้าสอบ
    const currentUser = {

        userId: "SPS-" + Date.now(),

        fullname: fullname.value.trim(),

        school: s.value,

        position: position.value || "",

        phone: phone.value || "",

        email: email.value || "",

        examId: ex.id,

        examCode: ex.code,

        examName: ex.title,

        questionFile: ex.questionFile || "",

        totalQuestion: ex.totalQuestion || 0,

        examTime: ex.time,

        passScore: ex.passScore,

        startTime: new Date().toLocaleString("th-TH"),

        status: "REGISTERED"

    };

    console.log("Current User =", currentUser);

    localStorage.setItem(
        "currentUser",
        JSON.stringify(currentUser)
    );

    // บันทึกเวลาสอบเริ่มต้น
    localStorage.setItem(
        "examStartTime",
        Date.now()
    );

    // ไปหน้าข้อสอบ
    window.location.href = "exam-room.html";

};