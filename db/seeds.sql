USE spare-parts;

INSERT INTO organs (name)
VALUES
("Brain"),
("Kidney"),
("Liver"),
("Heart"),
("Lung"),
("Pancreas"),
("Intestines");

INSERT INTO purpose (goal, organs_id),
VALUES
("Research", 1),
("Non_Directed Donation", 1),
("Pediatric Donation", 2),
("Paired Donations", 2)
("Directed Donation", 3),
("Tissue Donation", 3);

INSERT INTO donors (donor_number, purpose_id),
VALUES
("2367", 1),
("3243", 1),
("4324", 2),
("0879", 2),
("0927", 3),
("4238", 3);



