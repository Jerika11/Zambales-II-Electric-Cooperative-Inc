-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: May 18, 2024 at 02:32 PM
-- Server version: 8.0.30
-- PHP Version: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `zameco`
--

-- --------------------------------------------------------

--
-- Table structure for table `announcement`
--

CREATE TABLE `announcement` (
  `announce_id` int NOT NULL,
  `company` text NOT NULL,
  `date` text NOT NULL,
  `from_time` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `to_time` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `duration` text NOT NULL,
  `affected_area` text NOT NULL,
  `purpose` text NOT NULL,
  `status` varchar(255) DEFAULT 'Pending',
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `announcement`
--

INSERT INTO `announcement` (`announce_id`, `company`, `date`, `from_time`, `to_time`, `duration`, `affected_area`, `purpose`, `status`, `created_at`) VALUES
(1, 'Zameco', '2024-05-18', '07:00', '17:00', '10', 'Whole Area of Subic', 'Road Widening', 'Pending', '2024-05-18 05:41:07'),
(2, 'Zameco', '2024-05-18', '03:00', '06:00', '3', 'Matain', 'Natumba yung poste', 'Pending', '2024-05-18 05:43:26'),
(8, 'Zameco', '2024-05-17', '06:00', '19:00', '13', 'sdfsdfdsfdf', 'sdfdsfsdfsdf', 'Pending', '2024-05-18 06:32:23'),
(9, 'Zameco', '2024-05-17', '02:00', '13:00', '11', 'sasdasd', 'assadasdasd', 'Done', '2024-05-18 06:34:08'),
(10, 'Zameco', '2024-05-17', '09:09', '21:10', '12.016666666666667', 'sdsadas', 'asassaads', 'Pending', '2024-05-18 06:35:05'),
(11, 'NGCP', '2024-05-18', '03:37', '12:00', '8.383333333333333', 'jkhkjhjkhjkhjkh', 'jhjkhkhkjh', 'Pending', '2024-05-18 06:38:11'),
(14, 'NGCP', '2024-05-19', '06:00', '18:00', '12', 'Whole Zambalessdfsdfdfsddfgfdgfgfgfgdf34234324', 'Wala trip ko lang', 'Pending', '2024-05-18 06:48:14'),
(15, 'Zameco', '2024-05-19', '06:00', '19:00', '13', 'Samplekfdlskfjslk', 'cdskljkljlkjdsklfjdslkfjsd', 'Pending', '2024-05-18 06:50:27');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `announcement`
--
ALTER TABLE `announcement`
  ADD PRIMARY KEY (`announce_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `announcement`
--
ALTER TABLE `announcement`
  MODIFY `announce_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
