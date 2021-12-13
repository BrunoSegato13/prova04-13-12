import org.junit.jupiter.api.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.time.Duration;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.openqa.selenium.support.ui.ExpectedConditions.alertIsPresent;

public class CategoryTest {

    @Test
    void should_TryToCreateDuplicateCategory_andExpectThrowError() {
        ChromeDriver driver = new ChromeDriver();
        WebDriverWait wait = new WebDriverWait(driver, 2);

        driver.get("http://localhost:3000/category");

        if (driver.getPageSource().contains("TestSelenium")) {
            WebElement card = driver.findElement(By.name("TestSelenium"));
            String idNumber = card.getAttribute("id");
            driver.findElement(By.id("delete-button-".concat(idNumber))).click();
        }

        driver.findElement(By.id("create-button")).click();
        driver.findElement(By.id("category-name")).sendKeys("TestSelenium");
        driver.findElement(By.id("add-button")).click();

        WebElement createButton = new WebDriverWait(driver, Duration.ofSeconds(10))
                .until(ExpectedConditions.elementToBeClickable(By.id("create-button")));
        createButton.click();
        driver.findElement(By.id("category-name")).sendKeys("TestSelenium");
        driver.findElement(By.id("add-button")).click();

        assertNotNull(wait.until(alertIsPresent()));
        assertEquals("Categoria já cadastrada!", driver.switchTo().alert().getText());
        driver.switchTo().alert().accept();

        driver.close();
    }
}
