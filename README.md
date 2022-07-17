# JS vs Java Spring boot

#Java Script

Single-theard tức là người dùng chỉ được giải quyết một
yêu cầu trong một khoảng thời gian nhất định trên website

JS dùng single-theard nên phải có cơ chế Event loop để 
có thể thực hiện nhiều thao tác cùng một lúc

--> Event loop là cơ chế giúp JS có thể thực hiện nhiều
thao tác cùng một lúc



Callback function có thể được hiểu nôm na là một function
A được truyền vào một function B thông qua danh sách các
tham số của B. Lúc này tại hàm B sẽ gọi đến hàm A để
thực hiện một chức năng nào đó mà A đang nắm giữ


Từ khoá "this"
Chúng ta dùng từ khóa this để đại diện cho một đối tượng. 
Đối tượng đó là chủ thế của ngữ cảnh, hoặc là chủ thế 
của code đang được chạy

Object trong javascript
Kiểu Object là kiểu được sử dụng nhiều nhất vì tính linh 
hoạt cực kỳ mạnh mẽ của nó trong việc xử lý dữ liệu

Prototype trong javascript
Prototype là cơ chế mà các object trong javascript kế 
thừa các tính năng từ một object khác. Tất cả các object 
trong javascript đều có một prototype, và các object này 
kế thừa các thuộc tính (properties) cũng như phương thức 
(methods) từ prototype của mình.






#Sping framework :
Khái niệm :
Spring là framework phát triển các ứng dụng Java, nó giúp ứng dụng có hiệu năng cao, dễ kiểm thử và sử dụng lại code,…

Spring tổ chức theo module nên dễ dàng tái sử dụng.

*Spring MVC
Khái niệm
Spring MVC là framework được thiết kế dành cho xây dựng ứng dụng nền tảng web.

Nó tuân theo mô hình MVC (Model-View-Controller)

*M-V-C
Model: là các file POJO, Service, DAO thực hiện truy cập database, xử lý business
View: là các file JSP, html…
Control: là Dispatcher Controller, Handler Mapping, Controller – thực hiện điều hướng các request.


*Flow trong Spring MVC:

Bất kỳ request nào tới ứng dụng web đều sẽ được gửi tới Front Controller (Dispatcher Servlet)

Front Controller sẽ sử dụng Handler Mapping để biết được controller nào sẽ xử lý request đó

Controller nhận request, gọi tới các class service thích hợp để xử lý yêu cầu.

Sau khi xử lý xong, Controller sẽ nhận được model từ tầng Service hoặc tầng DAO.

Controller gửi model vừa nhận được tới Front Controller (Dispatcher Servlet)

Dispatcher Servlet sẽ tìm các mẫu view, sử dụng view resolver và truyền model vào nó.

View template, model, view page được build và gửi trả lại Front Controller

Front Controller gửi một page view tới trình duyệt để hiển thị nó cho người dùng.
