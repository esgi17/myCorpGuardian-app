package pa;

import javafx.application.Application;
import javafx.fxml.FXMLLoader;
import javafx.scene.Parent;
import javafx.scene.Scene;
import javafx.scene.image.Image;
import javafx.stage.Stage;

import java.io.IOException;

import static pa.Models.Api.checkToken;
import static pa.Models.Api.getToken;


public class Main extends Application {
    public static Stage primaryStage;

    public void start(Stage primaryStage) throws Exception{
        this.primaryStage = primaryStage;
        this.primaryStage.setTitle("My Corp Guardian");

        initApp();
    }

    private void initApp() throws IOException {
        System.out.println("App initializing..."); // LOG
        if( checkLogin() ) {
            openHomePage();

        } else {
            openLoginPage();
        }
    }


    public boolean checkLogin() {
        if( getToken() == null || getToken().isEmpty() ) {
            System.out.println("No token provided...");
            return false;
        } else {
            if( !checkToken() ) {
                System.out.println("Bad token provided...");
                return false;
            }
        }
        System.out.println("Token ok! ");
        return true;

    }

    public static void main(String[] args) throws Exception { launch(args); }


    public void openLoginPage() throws IOException {
        Parent root = FXMLLoader.load(getClass().getResource("View/login.fxml"));
        primaryStage.setTitle("My Corp Guardian - Login");
        primaryStage.setScene(new Scene(root, 350, 300));
        primaryStage.getIcons().add(new Image("pa/View/pic/icone.png"));
        primaryStage.setResizable(false);
        primaryStage.show();
    }

    public void openHomePage() throws IOException {
        Parent root = FXMLLoader.load(getClass().getResource("View/home.fxml"));
        primaryStage.setTitle("My Corp Guardian - Home");
        primaryStage.setScene(new Scene(root, 900, 600));
        primaryStage.getIcons().add(new Image("pa/View/pic/icone.png"));
        primaryStage.setResizable(false);
        primaryStage.show();
    }

}
