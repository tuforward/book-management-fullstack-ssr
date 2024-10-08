console.log("---------- SCRIPT.JS ---------");

// Bộ Lọc Trạng Thái
const buttonFilterStatus = document.querySelectorAll("[button-filter-status");
if(buttonFilterStatus.length > 0) {
    buttonFilterStatus.forEach(button => {
        // lắng nghe 
        button.addEventListener("click", (event) => {
            
            let url =   new URL(window.location.href); // lấy đường dẫn url

            // lấy trạng thái của nút nhấn bộ lọc
            const status = button.getAttribute("button-filter-status");

            if(status) {
                url.searchParams.set("status", status);
            }

            else {
                url.searchParams.delete("status");
            }

            window.location.href = url.href;  // chuyển hướng url
        });
    });
}
// Hết Bộ Lọc Trạng Thái