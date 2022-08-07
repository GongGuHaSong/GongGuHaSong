package solabo.GongGuHaSong.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import solabo.GongGuHaSong.domain.Registration;

import java.util.List;

public interface RegistrationRepository extends MongoRepository<Registration, String> {
    List<Registration> findByTitle(String title);
}
