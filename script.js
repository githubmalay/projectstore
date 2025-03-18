<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>PHP Projects for Sale</title>
    <!-- Font Awesome -->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" rel="stylesheet">
    <!-- Bootstrap -->
    <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">
    <!-- Google Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap" rel="stylesheet">
    <style>
        body {
            font-family: 'Poppins', sans-serif;
            background-color: #f4f4f9;
            color: #333;
            margin: 0;
            padding: 0;
        }

        /* Navbar */
        .navbar {
            background-color: #0d6efd;
            padding: 1rem 2rem;
            box-shadow: 0 4px 8px rgba(0,0,0,0.1);
        }

        .navbar-brand {
            font-size: 1.8rem;
            font-weight: 600;
            color: #fff;
            transition: color 0.3s ease;
        }

        .navbar-nav .nav-link {
            font-size: 1rem;
            font-weight: 500;
            color: #fff;
            margin-right: 15px;
            transition: color 0.3s ease;
        }

        .navbar-nav .nav-link:hover {
            color: #dbeafe;
        }

        /* Hero Section */
        .hero-section {
            background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
                url('https://source.unsplash.com/1600x900/?technology') center/cover;
            color: #ffffff;
            padding: 150px 20px;
            text-align: center;
            border-bottom: 4px solid #0d6efd;
        }

        .hero-section h1 {
            font-size: 3.5rem;
            font-weight: 700;
            margin-bottom: 20px;
            animation: fadeInDown 1s ease;
        }

        .hero-section .btn {
            padding: 12px 35px;
            font-size: 1.2rem;
            background-color: #0d6efd;
            color: #fff;
            border-radius: 30px;
            transition: all 0.3s ease;
        }

        .hero-section .btn:hover {
            background-color: #0b5ed7;
            transform: translateY(-3px);
        }

        @keyframes fadeInDown {
            from {
                opacity: 0;
                transform: translateY(-20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        /* Project Cards */
        .card {
            border: none;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            cursor: pointer;
        }

        .card:hover {
            transform: translateY(-8px);
            box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
        }

        .card img {
            height: 200px;
            object-fit: cover;
        }

        .card-body h5 {
            font-size: 1.4rem;
            font-weight: 600;
            color: #0d6efd;
        }

        .card-body .price {
            font-size: 1.2rem;
            font-weight: 600;
            color: #0d6efd;
        }

        /* Modal */
        .modal-content {
            border-radius: 12px;
            padding: 20px;
            background-color: #f9f9f9;
        }

        .carousel-inner img {
            height: 300px;
            object-fit: cover;
            border-radius: 8px;
        }

        /* Scroll-to-top Button */
        #scrollTopBtn {
            position: fixed;
            bottom: 20px;
            right: 20px;
            background-color: #0d6efd;
            color: #fff;
            border: none;
            padding: 12px 18px;
            border-radius: 30px;
            cursor: pointer;
            opacity: 0;
            transition: opacity 0.3s ease;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        }

        #scrollTopBtn.show {
            opacity: 1;
        }

        footer {
            background-color: #111;
            color: #aaa;
            padding: 20px 0;
            text-align: center;
        }
    </style>
</head>
<body>

<!-- Navbar -->
<nav class="navbar navbar-expand-lg">
    <a class="navbar-brand" href="#">ProjectStore</a>
</nav>

<!-- Hero Section -->
<section class="hero-section">
    <h1>Buy Premium PHP Projects</h1>
    <p>Ready-to-use projects with clean code and complete documentation.</p>
    <a href="#projects" class="btn btn-primary">Explore Projects</a>
</section>

<!-- Projects Section -->
<section id="projects" class="projects-section py-5">
    <div class="container">
        <h2 class="text-center mb-5">Featured Projects</h2>
        <div class="row" id="projectList">
            <!-- Dynamic Projects will load here -->
        </div>
    </div>
</section>

<!-- Modal -->
<div class="modal fade" id="projectModal">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-body">
                <div id="carouselExample" class="carousel slide" data-ride="carousel">
                    <div class="carousel-inner" id="carouselImages"></div>
                    <a class="carousel-control-prev" href="#carouselExample" data-slide="prev">
                        <span class="carousel-control-prev-icon"></span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExample" data-slide="next">
                        <span class="carousel-control-next-icon"></span>
                    </a>
                </div>
                <h3 id="modalTitle"></h3>
                <p id="modalDescription"></p>
                <ul id="modalFeatures"></ul>
                <div class="modal-footer">
                    <span class="price" id="modalPrice"></span>
                    <button class="btn btn-primary">Buy Now</button>
                    <button class="btn btn-secondary" data-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>
</div>

<!-- Scroll to Top Button -->
<button id="scrollTopBtn" onclick="scrollToTop()">⬆</button>

<!-- JS Libraries -->
<script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.bundle.min.js"></script>

<script>
    function scrollToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
</script>

</body>
</html>
