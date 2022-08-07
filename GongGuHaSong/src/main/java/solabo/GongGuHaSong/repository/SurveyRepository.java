package solabo.GongGuHaSong.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import solabo.GongGuHaSong.domain.Survey;

import java.util.List;

public interface SurveyRepository extends MongoRepository<Survey, String>{
    List<Survey> findByTitle(String title);
}
