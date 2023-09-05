Problem 1

select email from customers order by email  asc;

Problem 2

select id from orders
where customer_id = (select id from customers
where fname = 'Elizabeth');


Problem 3

select SUM(num_cupcakes) from orders
where processed = false;

Problem 4

select c.name, SUM(o.num_cupcakes)
from cupcakes as c
left join orders as o
on c.id = o.cupcake_id
GROUP BY c.name
ORDER BY c.name;


Problem 5

select c.email, SUM(o.num_cupcakes)
from customers as c
join orders as o
on c.id = o.customer_id
group by c.email
order by SUM(o.num_cupcakes) desc;


Problem 6

SELECT DISTINCT c.fname, c.lname, c.email
FROM customers as c
JOIN orders as o
ON c.id = o.customer_id
WHERE o.processed = true AND o.cupcake_id = (
    SELECT id FROM cupcakes
    WHERE name = 'funfetti'
);